Internal referencing
--------------------

.. code:: python

    ir_df = px.internal_referencing(spectra_df=ph_df)
    
.. note::

    To plot the spectrum with original ppm and shifted spectrum values

.. code:: python

    fig = go.Figure()

    fig.add_trace(go.Scatter(x=ir_df.columns.to_numpy(), y=ir_df.iloc[spectrIndex].values, mode='lines', line=dict(width=1), name='Signal'))
    fig.add_annotation(x=0, y=100000000, text=f'Reference peak', showarrow=True, arrowhead=1, ax=0, ay=-30)
    fig.update_layout(width=800, height=600)
    
    fig.show()
    
