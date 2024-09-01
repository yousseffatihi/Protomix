Negative values zeroing
-----------------------

.. code:: python

    nvz_df = px.negative_values_zeroing(spectra_df=bc_df)
    px.plot(nvz_df.columns, nvz_df.iloc[spectrIndex].apply(np.real), title='NMR Spectrum after negative values zeroing', xlabel='Chemical shift')
