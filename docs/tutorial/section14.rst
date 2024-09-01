Peak alignment dataframe
------------------------

.. code:: python

    pa_df = pd.DataFrame(icoshift.result, index=nvz_df.index, columns=nvz_df.columns)
    px.plot(pa_df.columns, pa_df.iloc[spectrIndex].apply(np.real), title='NMR Spectrum after peak alignment', xlabel='Chemical Shift (ppm)')
    

.. note::

    To plot the first five spectra after peak alignment

.. code:: python

    traces = [go.Scatter(x=pa_df.columns.values, y=icoshift.result[i, :]) for i in range(5)]

    layout = go.Layout(title='Urine Dataset after peak alignment')
    fig = go.Figure(data=traces, layout=layout)
    pio.show(fig)
    
