Baseline correction
-------------------

.. code:: python

    bc_df = px.baseline_correction(spectra_df=ir_df, method='airpls')
    px.plot(bc_df.columns, bc_df.iloc[spectrIndex].apply(np.real), title='NMR Spectrum after baseline correction', xlabel='Chemical shift')
