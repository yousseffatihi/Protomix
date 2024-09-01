Icoshift class
--------------

.. note::

    We use Icoshift to do peak alignment. For More details can be found here : https://github.com/sekro/pyicoshift

.. code:: python

    icoshift = px.Icoshift()

    icoshift.signals = nvz_df.values
    icoshift.signal_names = list(nvz_df.index.values)
    icoshift.inter = ('n_intervals', 100)
    icoshift.target = 'median'
    icoshift.global_pre_align = True
    icoshift.max_shift = 'best'
    
    icoshift.run()
    
