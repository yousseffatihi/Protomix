Phase correction
----------------

.. code:: python

    ph_df = px.phase_correction(spectra_df=spectra_df)
    px.plot(ph_df.columns, ph_df.iloc[spectrIndex].apply(np.real), title='NMR Spectrum after phase correction', xlabel='Chemical Shift (ppm)')
    
