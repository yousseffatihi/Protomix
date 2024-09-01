Solvent residuals estimation
----------------------------

.. code:: python

    fids, solvents = px.solvent_residuals_removal(fid_df=grpd_df, returnSolvent=True)    

.. note::

    Plot FID before correction, solvent residuals, and FID after correction

.. code:: python

    fig = make_subplots(rows=1, cols=2, shared_yaxes=True)

    fig.add_trace(go.Scatter(x=grpd_df.columns, y=grpd_df.iloc[spectrIndex].apply(np.real), line=dict(color='blue', width=0.5), name='FID Before Correction'), row=1, col=1)
    fig.add_trace(go.Scatter(x=solvents.columns, y=solvents.iloc[spectrIndex].apply(np.real), line=dict(color='red', width=0.8), name='Estimated Solvent'), row=1, col=1)
    fig.add_trace(go.Scatter(x=fids.columns, y=fids.iloc[spectrIndex].apply(np.real), line=dict(color='blue', width=0.5), name='FID After Correction'), row=1, col=2)
    
    fig.update_layout(height=600, width=1000, title_text="Solvent Residuals Removal")