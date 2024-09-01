Installing Protomix
-------------------

.. code-block:: bash

    !pip install protomix
    

Import packages
---------------

.. code:: python
    :number-lines:

    import numpy as np
    import pandas as pd
    import time
    
    import protomix as px
    
    import seaborn as sns
    import matplotlib.pyplot as plt
    from plotly.subplots import make_subplots
    import plotly.graph_objects as go
    import plotly.io as pio
    from sklearn.decomposition import PCA
    
    pio.templates.default = "plotly_white"
    
    

Downloading the dataset from Zenodo link
-----------------------------------------

.. code-block:: bash

    !wget -O NMRDataset.zip https://zenodo.org/record/13467227/files/NMRDataset.zip?download=1
    

Unzipping the downloaded dataset
--------------------------------

.. code-block:: bash

    !unzip NMRDataset.zip
    main_directory = r'/content/spectra'
    
.. caution::

    Directory where the Bruker data are located, please keep the same Bruker directory format.
