Remove group delay
-------------------

.. code:: python

    grpd_df = px.group_delay_removal(fid_df=fids_df, acqus_df=acqus_df)
    

.. note::
    
    Plot FID after group delay removal, zoom in this figure and the one before to see the difference

.. code:: python

    px.plot(x=grpd_df.columns, y=grpd_df.iloc[spectrIndex].apply(np.real), title='FID after group delay removal', xlabel='Time (s)', ylabel='Intensity (a.u.)')