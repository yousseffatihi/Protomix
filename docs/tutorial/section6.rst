Zero filling: 
-------------

.. note::

    This function is adding points at the end of the FID to enhance the resolution. Compare the time domain with the plot before.

.. code:: python

    zf_df = px.zero_filling(fid_df=apod_df, acqus_df=acqus_df, target_points=10000)
    px.plot(x=zf_df.columns, y=zf_df.iloc[spectrIndex].apply(np.real), title='FID after zero filling')
    
