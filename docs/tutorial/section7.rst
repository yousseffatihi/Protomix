Fourier Transformation
----------------------

.. code:: python

    spectra_df = px.fourier_transform(fid_df=zf_df, acqus_df=acqus_df)
    px.plot(x=spectra_df.columns, y=spectra_df.iloc[spectrIndex].apply(np.real), title='FID after Fourier transform', xlabel='Chemical Shift (ppm)')
    
