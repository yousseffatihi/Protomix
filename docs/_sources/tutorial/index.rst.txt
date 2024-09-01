Tutorial 
========

.. toctree::
   :maxdepth: 2

   Installing & Import <section1>
   section2
   section3
   section4
   section5
   section6
   section7
   section8
   section9
   section10
   section11
   section12
   section13
   section14
   section15
   section16
   section17

.. caution::

    If you want to see the full code, it's available on colab : `link <https://colab.research.google.com/drive/1gPUHOqjkFuxGW49sOJDpHYv7OiHq3aph>`_

Installing Protomix
-------------------

.. code-block:: bash

    !pip install Protomix
    

Import packages
---------------

.. code:: python
    :number-lines:

    import numpy as np
    import pandas as pd
    import time
    
    import protomix as px
    
    import seaborn as sns
    import matplotlib.pyplot as plt
    from plotly.subplots import make_subplots
    import plotly.graph_objects as go
    import plotly.io as pio
    from sklearn.decomposition import PCA
    
    pio.templates.default = "plotly_white"
    
    

Downloading the dataset from Zenodo link
-----------------------------------------

.. code-block:: bash

    !wget -O NMRDataset.zip https://zenodo.org/record/13467227/files/NMRDataset.zip?download=1
    

Unzipping the downloaded dataset
--------------------------------

.. code-block:: bash

    !unzip NMRDataset.zip
    main_directory = r'/content/spectra'
    
.. caution::

    Directory where the Bruker data are located, please keep the same Bruker directory format.
    

Extract Acquisition parameters
------------------------------

.. code:: python

    acqus_df = px.extract_params(root_directory=main_directory)
    

Extract Free Induction Decays (FID)
-----------------------------------

.. code:: python

    fids_df = px.extract_fids(root_directory=main_directory, acqus_df=acqus_df)
    

You can plot raw FID using `px.plot`:

.. code:: python

    px.plot(x=fids_df.columns, y=fids_df.iloc[spectrIndex].apply(np.real), title='Free induction decay')
    

Remove group delay
-------------------

.. code:: python

    grpd_df = px.group_delay_removal(fid_df=fids_df, acqus_df=acqus_df)
    

.. note::
    
    Plot FID after group delay removal, zoom in this figure and the one before to see the difference

.. code:: python

    px.plot(x=grpd_df.columns, y=grpd_df.iloc[spectrIndex].apply(np.real), title='FID after group delay removal', xlabel='Time (s)', ylabel='Intensity (a.u.)')
    

Solvent residuals estimation
----------------------------

.. code:: python

    fids, solvents = px.solvent_residuals_removal(fid_df=grpd_df, returnSolvent=True)    

.. note::

    Plot FID before correction, solvent residuals, and FID after correction

.. code:: python

    fig = make_subplots(rows=1, cols=2, shared_yaxes=True)

    fig.add_trace(go.Scatter(x=grpd_df.columns, y=grpd_df.iloc[spectrIndex].apply(np.real), line=dict(color='blue', width=0.5), name='FID Before Correction'), row=1, col=1)
    fig.add_trace(go.Scatter(x=solvents.columns, y=solvents.iloc[spectrIndex].apply(np.real), line=dict(color='red', width=0.8), name='Estimated Solvent'), row=1, col=1)
    fig.add_trace(go.Scatter(x=fids.columns, y=fids.iloc[spectrIndex].apply(np.real), line=dict(color='blue', width=0.5), name='FID After Correction'), row=1, col=2)
    
    fig.update_layout(height=600, width=1000, title_text="Solvent Residuals Removal")
    

Apodization
-----------

.. code:: python

    apod_df = px.apodization(fids, LB=5, apodization_type='exponential')
    px.plot(x=apod_df.columns, y=apod_df.iloc[spectrIndex].apply(np.real), title='Fid after apodization')
    

Zero filling: 
-------------

.. note::

    This function is adding points at the end of the FID to enhance the resolution. Compare the time domain with the plot before.

.. code:: python

    zf_df = px.zero_filling(fid_df=apod_df, acqus_df=acqus_df, target_points=10000)
    px.plot(x=zf_df.columns, y=zf_df.iloc[spectrIndex].apply(np.real), title='FID after zero filling')
    

Fourier Transformation
----------------------

.. code:: python

    spectra_df = px.fourier_transform(fid_df=zf_df, acqus_df=acqus_df)
    px.plot(x=spectra_df.columns, y=spectra_df.iloc[spectrIndex].apply(np.real), title='FID after Fourier transform', xlabel='Chemical Shift (ppm)')
    

Phase correction
----------------

.. code:: python

    ph_df = px.phase_correction(spectra_df=spectra_df)
    px.plot(ph_df.columns, ph_df.iloc[spectrIndex].apply(np.real), title='NMR Spectrum after phase correction', xlabel='Chemical Shift (ppm)')
    

Internal referencing
--------------------

.. code:: python

    ir_df = px.internal_referencing(spectra_df=ph_df)
    
.. note::

    To plot the spectrum with original ppm and shifted spectrum values

.. code:: python

    fig = go.Figure()

    fig.add_trace(go.Scatter(x=ir_df.columns.to_numpy(), y=ir_df.iloc[spectrIndex].values, mode='lines', line=dict(width=1), name='Signal'))
    fig.add_annotation(x=0, y=100000000, text=f'Reference peak', showarrow=True, arrowhead=1, ax=0, ay=-30)
    fig.update_layout(width=800, height=600)
    
    fig.show()
    

Baseline correction
-------------------

.. code:: python

    bc_df = px.baseline_correction(spectra_df=ir_df, method='airpls')
    px.plot(bc_df.columns, bc_df.iloc[spectrIndex].apply(np.real), title='NMR Spectrum after baseline correction', xlabel='Chemical shift')
    

Region removal
--------------

.. code:: python

    rv_df = px.region_removal(spectra_df=bc_df, range=(4.5, 6.1))
    px.plot(rv_df.columns, rv_df.iloc[spectrIndex].apply(np.real), title='NMR Spectrum after region removal', xlabel='Chemical shift')
    

Negative values zeroing
-----------------------

.. code:: python

    nvz_df = px.negative_values_zeroing(spectra_df=bc_df)
    px.plot(nvz_df.columns, nvz_df.iloc[spectrIndex].apply(np.real), title='NMR Spectrum after negative values zeroing', xlabel='Chemical shift')
    

Icoshift class
--------------

.. note::

    We use Icoshift to do peak alignment. For More details can be found here : https://github.com/sekro/pyicoshift

.. code:: python

    icoshift = px.Icoshift()

    icoshift.signals = nvz_df.values
    icoshift.signal_names = list(nvz_df.index.values)
    icoshift.inter = ('n_intervals', 100)
    icoshift.target = 'median'
    icoshift.global_pre_align = True
    icoshift.max_shift = 'best'
    
    icoshift.run()
    

Peak alignment dataframe
------------------------

.. code:: python

    pa_df = pd.DataFrame(icoshift.result, index=nvz_df.index, columns=nvz_df.columns)
    px.plot(pa_df.columns, pa_df.iloc[spectrIndex].apply(np.real), title='NMR Spectrum after peak alignment', xlabel='Chemical Shift (ppm)')
    

.. note::

    To plot the first five spectra after peak alignment

.. code:: python

    traces = [go.Scatter(x=pa_df.columns.values, y=icoshift.result[i, :]) for i in range(5)]

    layout = go.Layout(title='Urine Dataset after peak alignment')
    fig = go.Figure(data=traces, layout=layout)
    pio.show(fig)
    

Window selection
----------------

.. code:: python

    ws_df = px.window_selection(spectra_df=pa_df)
    px.plot(ws_df.columns, ws_df.iloc[spectrIndex].apply(np.real), title='NMR Spectrum', xlabel='Chemical shift (ppm)')
    

Binning
-------

.. code:: python

    bin_df = px.binning(spectra_df=ws_df, bin_size=0.1, method='rectangular')
    px.plot(bin_df.columns, bin_df.iloc[spectrIndex], title='NMR Spectrum', xlabel='Chemical shift (ppm)')
    

Normalization
-------------

.. code:: python

    norm_df = px.normalize(spectra_df=bin_df, method='TotalArea')
    px.plot(norm_df.columns, norm_df.iloc[spectrIndex], title='NMR Spectrum after normalization', xlabel='Chemical shift (ppm)')
    
.. note::

    To plot the first five spectra after normalization

.. code:: python
   :number-lines:

    traces = [go.Scatter(x=norm_df.columns.values, y=norm_df.to_numpy()[i, :]) for i in range(5)]
    
    layout = go.Layout(title='Normalization')
    fig = go.Figure(data=traces, layout=layout)
    pio.show(fig)