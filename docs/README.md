# MatLang Documentation
To access documentation go to this link:
https://juliamatlab.github.io/MatLang/dev

## docs folder
These are the source files that are used for building the documentation.

## To build the documentation locally
cd to package folder using OS terminal and run the following commands:
```
- julia -e 'using Pkg; Pkg.activate(); push!(LOAD_PATH, pwd());' 
- julia --project=docs/ -e 'using Pkg; Pkg.activate();  push!(LOAD_PATH,pwd());'

- julia --project=docs/ -e 'using Pkg; Pkg.develop(PackageSpec(path=pwd())); Pkg.instantiate();'
- julia --project=docs/ --color=yes docs/make.jl
```
Julia path should be added to OS path