Apodization
-----------

.. code:: python

    apod_df = px.apodization(fids, LB=5, apodization_type='exponential')
    px.plot(x=apod_df.columns, y=apod_df.iloc[spectrIndex].apply(np.real), title='Fid after apodization')
    