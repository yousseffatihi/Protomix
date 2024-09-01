Installation
============

.. toctree::
   :maxdepth: 2

   section1
   section2
   section3
   section4


Protomix is written in Python 3 and distributed as a PyPI package.

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

User installation
-----------------

If you are not using virtual environments, we recommend doing a user installation with pip:

.. code-block:: bash

    python3 -m pip install --user protomix

On Linux, this will place the Python module under $HOME/.local/lib/python3.X/site-packages, where X should be substituted for the minor version of your Python distribution. During the installation, an executable called protomix is built and placed under $HOME/.local/bin. In order for your Protomix installation to function properly, these paths must (if not already present) be appended to the correct environment variables:

.. code-block:: bash

    export PATH=$PATH:$HOME/.local/bin
    # Do not forget to substitute X for your Python minor version
    export PYTHONPATH=$PYTHONPATH:$HOME/.local/lib/python3.X/site-packages

To check that the installation was successful, calling the protomix executable without any arguments should result in usage instructions being printed. During the installation, you may see a large number of dependencies being installed by pip. Protomix includes various packages necessary for NMR data processing.

Development version
-------------------

To install the development version of Protomix, clone the source code from the repository and install it with pip:

.. code-block:: bash

    git clone https://github.com/yourusername/protomix.git
    cd protomix
    python3 -m pip install --user .

Experimental features
----------------------

After acquiring the source code, experimental features can be installed from their own development branches:

.. code-block:: bash

    git checkout [branch_name]
    cd protomix
    python3 -m pip install --user .

.. warning::

    Experimental features that are in development may produce inaccurate results. Use at your own risk!