Virtual environments (recommended)
----------------------------------

We recommend installing Protomix inside a virtual environment (venv, conda, etc.) to ensure a clean and isolated environment for your dependencies.

To create a virtual environment named protomix with venv:

.. code-block:: bash

    python3 -m venv protomix
    source protomix/bin/activate

Or with conda:

.. code-block:: bash

    conda create -n protomix
    conda activate protomix

The latest stable Protomix version can then be installed using pip:

.. code-block:: bash

    python3 -m pip install protomix