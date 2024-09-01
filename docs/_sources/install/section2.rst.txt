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