Binning
-------

.. code:: python

    bin_df = px.binning(spectra_df=ws_df, bin_size=0.1, method='rectangular')
    px.plot(bin_df.columns, bin_df.iloc[spectrIndex], title='NMR Spectrum', xlabel='Chemical shift (ppm)')
