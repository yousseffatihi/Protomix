Normalization
-------------

.. code:: python

    norm_df = px.normalize(spectra_df=bin_df, method='TotalArea')
    px.plot(norm_df.columns, norm_df.iloc[spectrIndex], title='NMR Spectrum after normalization', xlabel='Chemical shift (ppm)')
    
.. note::

    To plot the first five spectra after normalization

.. code:: python
   :number-lines:

    traces = [go.Scatter(x=norm_df.columns.values, y=norm_df.to_numpy()[i, :]) for i in range(5)]
    
    layout = go.Layout(title='Normalization')
    fig = go.Figure(data=traces, layout=layout)
    pio.show(fig)