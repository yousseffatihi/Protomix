Extract Acquisition parameters
------------------------------

.. code:: python

    acqus_df = px.extract_params(root_directory=main_directory)
    

Extract Free Induction Decays (FID)
-----------------------------------

.. code:: python

    fids_df = px.extract_fids(root_directory=main_directory, acqus_df=acqus_df)
    

You can plot raw FID using `px.plot`:

.. code:: python

    px.plot(x=fids_df.columns, y=fids_df.iloc[spectrIndex].apply(np.real), title='Free induction decay')
