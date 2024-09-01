Window selection
----------------

.. code:: python

    ws_df = px.window_selection(spectra_df=pa_df)
    px.plot(ws_df.columns, ws_df.iloc[spectrIndex].apply(np.real), title='NMR Spectrum', xlabel='Chemical shift (ppm)')
    
