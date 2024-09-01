Region removal
--------------

.. code:: python

    rv_df = px.region_removal(spectra_df=bc_df, range=(4.5, 6.1))
    px.plot(rv_df.columns, rv_df.iloc[spectrIndex].apply(np.real), title='NMR Spectrum after region removal', xlabel='Chemical shift')
