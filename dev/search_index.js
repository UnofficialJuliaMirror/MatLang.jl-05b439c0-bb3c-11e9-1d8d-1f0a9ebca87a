var documenterSearchIndex = {"docs":
[{"location":"functions/#Functions-1","page":"Functions","title":"Functions","text":"","category":"section"},{"location":"functions/#List-of-implemented-Functions-1","page":"Functions","title":"List of implemented Functions","text":"","category":"section"},{"location":"functions/#Language_Fundamentals-:-1","page":"Functions","title":"Language_Fundamentals :","text":"","category":"section"},{"location":"functions/#","page":"Functions","title":"Functions","text":"<table>\n    <tr>\n        <td></td>\n        <td>Sub Package</td>\n        <td></td>\n    </tr>\n    <tr>\n        <td>1</td>\n        <td>Entering_Commands</td>\n        <td>clcM</td>\n    </tr>\n    <tr>\n        <td>2</td>\n        <td>Matrices_and_Arrays</td>\n        <td>zerosM</td>\n        <td>onesM</td>\n        <td>randM</td>\n        <td>eyeM</td>\n        <td>diagM</td>\n        <td>blkdiagM</td>\n    </tr>\n</table>","category":"page"},{"location":"functions/#","page":"Functions","title":"Functions","text":"","category":"page"},{"location":"functions/#","page":"Functions","title":"Functions","text":"The full list of the functions that will be implemented in the future can be found Here","category":"page"},{"location":"functions/#Functions-Explanation-and-Examples-1","page":"Functions","title":"Functions Explanation and Examples","text":"","category":"section"},{"location":"functions/#Language-Fundamentals-1","page":"Functions","title":"Language Fundamentals","text":"","category":"section"},{"location":"functions/#Entering_Commands-1","page":"Functions","title":"Entering_Commands","text":"","category":"section"},{"location":"functions/#","page":"Functions","title":"Functions","text":"Modules = [MatLang]\nPages   = [\"Entering_Commands.jl\"]","category":"page"},{"location":"functions/#MatLang.clcM-Tuple{}","page":"Functions","title":"MatLang.clcM","text":"clcM()\n\nClear Command Window for Juno or Atom IDE\n\n\n\n\n\n","category":"method"},{"location":"functions/#Matrices-and-Arrays-1","page":"Functions","title":"Matrices and Arrays","text":"","category":"section"},{"location":"functions/#","page":"Functions","title":"Functions","text":"Modules = [MatLang]\nPages   = [\"Matrices_and_Arrays.jl\"]","category":"page"},{"location":"functions/#MatLang.blkdiagM-Tuple","page":"Functions","title":"MatLang.blkdiagM","text":"blkdiagM(A1,A2,...)\n\nCreates a square matrix with A1,A2,... on the diagonal and the rest of the elements being 0. Works for both square and non-square matrices.\n\nblkdiagM(A1,A2,..., :obj)\n\nReturns the object itself if you want to use BlockDiagonals methods. use collect(obj) to get the array.\n\nExamples\n\n1 = 3 * ones(2, 2);\nA2 = 4 * ones(2, 2);\nA3 = rand(3, 3);\nmBlkdiag1 = blkdiagM(A1, A2, A3)\n\nmBlkdiag2 = blkdiagM(ones(2, 2), 2 * ones(2, 2)) # [ones(2, 2) zeros(2, 2); zeros(2, 2)  2 * ones(2, 2)]\n\nA1 = ones(2, 4);\nA2 = 2 * ones(3, 2);\nmBlkdiag3 = blkdiagM(A1, A2) # [ones(2,4) zeros(2,2); zeros(3,4) 2*ones(3,2)]\n\nmBlkdiag1obj = blkdiagM(:obj, A1, A2, A3)\n\nmBlkdiag2obj = blkdiagM(:obj, ones(2, 2), 2 * ones(2, 2)) # Block Diagonal object for [ones(2, 2) zeros(2, 2); zeros(2, 2)  2 * ones(2, 2)]\n\n\n\n\n\n","category":"method"},{"location":"functions/#MatLang.catM-Tuple{Integer,Vararg{Any,N} where N}","page":"Functions","title":"MatLang.catM","text":"catM(dim, A1, A2, ...)\n\nconcatenates A1, A2, … , An along dimension dim.\n\nExamples\n\nmCat1 = catM(1, ones(3, 3), zeros(3, 3)) # [ones(3, 3); zeros(3, 3)]\n\nmCat2 = catM(2, ones(3, 3), zeros(3, 3)) # [ones(3, 3) zeros(3, 3)]\n\nmCat3 = catM(1, ones(3, 3), zeros(3, 3), 2 * ones(3, 3)) # [ones(3, 3); zeros(3, 3); 2 * ones(3, 3)]\n\nmCat4 = catM(3, ones(2, 2, 2), zeros(2, 2, 2)) # [ones(2, 2, 2) zeros(2, 2, 2)]\n\n\n\n\n\n","category":"method"},{"location":"functions/#MatLang.eyeM-Tuple{Type,Integer,Integer}","page":"Functions","title":"MatLang.eyeM","text":"eyeM(dim)         # square dim*dim matrix\neyeM(Type, dim)    # square dim*dim matrix\neyeM(dim, like = anArray) # to make an array with similar type of anArray\neyeM(dim1, dim2)   # giving size as a separate input numbers\neyeM(Type, dim1, dim2)   # giving size as a separate input numbers\neyeM(dim1, dim2, like = anArray) # to make an array with similar type of anArray\neyeM(sizeAsTuple) # giving size as a Tuple\neyeM(Type, sizeAsTuple) # giving size as a Tuple\neyeM(sizeAsTuple, like = anArray) # to make an array with similar type of anArray\neyeM(sizeAsArray) # non-efficient Matlab way\neyeM(Type, sizeAsArray) # non-efficient Matlab way\neyeM(sizeAsArray, like = anArray) # to make an array with similar type of anArray\n\nCreates 2D Identity matrix (can be non-square matrix).\n\nOnly 2 dimensions should be supplied othetwise you will receive an error.\n\nExamples\n\nmEye0=eyeM(2); # [1 0 0; 0 1 0]\n\nmEye1=eyeM(2,3); # [1 0 0; 0 1 0]\n\nmEye2=eyeM(Int32,2,3); # [1 0 0; 0 1 0]\n\nmEye3=eyeM(2,3, like = zerosM(Int8,2,2) )\n\nmEye4=eyeM((2,2))  # giving size as a Tuple. In Julia we use (2,2) instead of giving it as [2,2]\n\nmEye5=eyeM(Int32,(2,2))  # giving size as a Tuple. In Julia we use (2,2) instead of giving it as [2,2]\n\nmEye6=eyeM([2,2]) # non-efficient Matlab way\n\nmEye7=eyeM(Int32,[2,2]) # non-efficient Matlab way\n\ns1=size(ones(2,3)) # getting size from another matrix or calculation\nmEye8=eyeM(s1)  # giving size as a variable (Tuple).\n\n\n\n\n\n","category":"method"},{"location":"functions/#MatLang.horzcatM","page":"Functions","title":"MatLang.horzcatM","text":"horzcatM(A1, A2, …)\n\nConcatenate arrays horizontally\n\nExamples\n\nmHCat1 = horzcatM(ones(3, 3), zeros(3, 3)) # [ones(3, 3) zeros(3, 3)]\n\n\n\n\n\n","category":"function"},{"location":"functions/#MatLang.onesM-Tuple","page":"Functions","title":"MatLang.onesM","text":"onesM(dim)         # square dim*dim matrix\nonesM(Type, dim)    # square dim*dim matrix\nonesM(dim, like = anArray) # to make an array with similar type of anArray\nonesM(sizeAsArray) # non-efficient Matlab way\nonesM(Type, sizeAsArray) # non-efficient Matlab way\nonesM(sizeAsArray, like = anArray) # to make an array with similar type of anArray\n\nExamples\n\nmOnes0=onesM(2) # same as ones(2,2)\n\nmOnes1 = onesM(2, like = zerosM(Int32,2,2) )\n\nmOnes2=onesM(2,2) # same as ones(2,2)\n\nmOnes3=onesM(Int32,2,2) # same as ones(Int32,2,2)\n\nmOnes4=onesM((2,2)) # giving size as Tuple\n\nmOnes5=onesM(Int32,(2,2)) # giving size as Tuple and also the Int32 type\n\nmOnes6=onesM([2,2]) # giving size as an Array, non-efficient Matlab way. Array should be Integer otherwise you will get errors.\n\nmOnes7=onesM(Int32,[2,2]) # giving size as Array, non-efficient Matlab way\n\n\n\n\n\n","category":"method"},{"location":"functions/#MatLang.randM-Tuple","page":"Functions","title":"MatLang.randM","text":"randM(dim)         # square dim*dim matrix\nrandM(Type, dim)    # square dim*dim matrix\nrandM(dim, like = anArray) # to make an array with similar type of anArray\nrandM(sizeAsArray) # non-efficient Matlab way\nrandM(Type, sizeAsArray) # non-efficient Matlab way\nrandM(sizeAsArray, like = anArray) # to make an array with similar type of anArray\n\nExamples\n\nmRand0=randM(2) # same as rand(2,2)\n\nmRand1 = randM(2, like = zerosM(Int32,2,2) )\n\nmRand2=randM(2,2) # same as rand(2,2)\n\nmRand3=randM(Int32,2,2) # same as rand(Int32,2,2)\n\nmRand4=randM((2,2)) # giving size as Tuple\n\nmRand5=randM(Int32,(2,2)) # giving size as Tuple and also the Int32 type\n\nmRand6=randM([2,2]) # giving size as an Array, non-efficient Matlab way. Array should be Integer otherwise you will get errors.\n\nmRand7=randM(Int32,[2,2]) # giving size as Array, non-efficient Matlab way\n\n\n\n\n\n","category":"method"},{"location":"functions/#MatLang.squeezeM-Tuple{AbstractArray}","page":"Functions","title":"MatLang.squeezeM","text":"squeezeM(A)\n\nDrops all of the singleton dimensions of A (dimensions that are 1). If A contains only one element (i.e., all of its dimensions are singletons) then the output will be a zero-dimensional array.\n\nIf you know the dimension that you want to drop, use dropdims(A ; dims= dimensionsToRemove).\n\nOnly use this function if you don't know the dimensions that you want to remove, and you are sure that you are not removing important dimensions, and if you don't care about type stability.\n\nReturns an array containing the same data as A but with no singleton dimensions; note that arr is NOT a copy of A, i.e., modifying the contents of arr will modify the contents of A. To get a copy use copy(arr).\n\nExamples\n\nA1 = ones(2, 1, 2); # 3 dimensional\nmSqueeze1 = squeezeM(A1) # [1 1; 1 1]\n\nA2 = zeros(1, 4, 1);\nA2[:, 1:4, ] = [5; 3; 6; 0]\nmSqueeze2 = squeezeM(A2) # When it gets one dimensional, it is vertical.\n\nmSqueeze2 == [5; 3; 6; 0] # true\nmSqueeze2 == [5 3 6 0] # false\n\n\n\n\n\n","category":"method"},{"location":"functions/#MatLang.vertcatM","page":"Functions","title":"MatLang.vertcatM","text":"vertcatM(A1, A2, …)\n\nConcatenate arrays vertically\n\nExamples\n\nmVCat1 = vertcatM(ones(3, 3), zeros(3, 3)) # [ones(3, 3); zeros(3, 3)]\n\n\n\n\n\n","category":"function"},{"location":"functions/#MatLang.zerosM-Tuple","page":"Functions","title":"MatLang.zerosM","text":"zerosM(dim)         # square dim*dim matrix\nzerosM(Type,dim)    # square dim*dim matrix\nzerosM(dim, like=anArray) # to make an array with similar type of anArray\nzerosM(sizeAsArray) # non-efficient Matlab way\nzerosM(Type, sizeAsArray) # non-efficient Matlab way\nzerosM(sizeAsArray, like=anArray) # to make an array with similar type of anArray\n\nExamples\n\nmZeros0=zerosM(2) # same as zeros(2,2)\n\nmZeros1 = zerosM(2, like = zerosM(Int32,2,2) ) # like method\n\nmZeros2=zerosM(2,2) # same as zeros(2,2)\n\nmZeros3=zerosM(Int32,2,2) # same as zeros(Int32,2,2)\n\nmZeros4=zerosM((2,2)) # giving size as Tuple\n\nmZeros5=zerosM(Int32,(2,2)) # giving size as Tuple and also the Int32 type\n\nmZeros6=zerosM([2,2]) # giving size as an Array, non-efficient Matlab way. Array should be Integer otherwise you will get errors.\n\nmZeros7=zerosM(Int32,[2,2]) # giving size as Array, non-efficient Matlab way\n\n\n\n\n\n","category":"method"},{"location":"development/#Development-1","page":"Development - Contribution","title":"Development","text":"","category":"section"},{"location":"development/#","page":"Development - Contribution","title":"Development - Contribution","text":"clone the project in your usual way, or using the following command which clones the project in .julia\\dev\\MatLang","category":"page"},{"location":"development/#","page":"Development - Contribution","title":"Development - Contribution","text":"] dev https://github.com/juliamatlab/MatLang","category":"page"},{"location":"development/#","page":"Development - Contribution","title":"Development - Contribution","text":"cd to cloned package. if you used dev command, run the following:","category":"page"},{"location":"development/#","page":"Development - Contribution","title":"Development - Contribution","text":"cd(\"$(homedir())\\\\.julia\\\\dev\\\\MatLang\")","category":"page"},{"location":"development/#","page":"Development - Contribution","title":"Development - Contribution","text":"Activate the package:","category":"page"},{"location":"development/#","page":"Development - Contribution","title":"Development - Contribution","text":"] activate .","category":"page"},{"location":"development/#","page":"Development - Contribution","title":"Development - Contribution","text":"Set developing variable to true in the files in test and usage folder.","category":"page"},{"location":"development/#","page":"Development - Contribution","title":"Development - Contribution","text":"developing = true","category":"page"},{"location":"development/#","page":"Development - Contribution","title":"Development - Contribution","text":"Set developing variable to false before committing (for a successful CI build).","category":"page"},{"location":"development/#","page":"Development - Contribution","title":"Development - Contribution","text":"The package uses Revise for quick testing without the need for restarting.","category":"page"},{"location":"development/#Contribution-Coding-Standard-1","page":"Development - Contribution","title":"Contribution - Coding Standard","text":"","category":"section"},{"location":"development/#","page":"Development - Contribution","title":"Development - Contribution","text":"For coding standard please refer to Coding Standard. Feel free to contribute to this multi-field project. We need developers from different backgrounds to provide Matlab friendly API and wrappers.","category":"page"},{"location":"development/#","page":"Development - Contribution","title":"Development - Contribution","text":"Separate repositories are created for each toolbox. To provide fast and efficient wrappers please follow: https://docs.julialang.org/en/v1/manual/performance-tips/#Write-%22type-stable%22-functions-1","category":"page"},{"location":"#","page":"Home","title":"Home","text":"# Information for Documenter\nCurrentModule = MatLang","category":"page"},{"location":"#MatLang-Documentation-1","page":"Home","title":"MatLang Documentation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"API for Matlab's language core functions","category":"page"},{"location":"#","page":"Home","title":"Home","text":"MatLang GitHub Repository Link: ","category":"page"},{"location":"#","page":"Home","title":"Home","text":"MatLang","category":"page"},{"location":"#","page":"Home","title":"Home","text":"JuliaMatlab GitHub Repository Link: ","category":"page"},{"location":"#","page":"Home","title":"Home","text":"JuliaMatlab   ","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Master Repo","category":"page"},{"location":"#","page":"Home","title":"Home","text":"(Image: Dev Doc) (Image: Project Status: Active – The project has reached a stable, usable state and is being actively developed.) (Image: Build Status) (Image: Build status) (Image: codecov)","category":"page"},{"location":"#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Add the package","category":"page"},{"location":"#","page":"Home","title":"Home","text":"]add https://github.com/juliamatlab/MatLang","category":"page"},{"location":"#Usage-1","page":"Home","title":"Usage","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Use the package:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"using MatLang","category":"page"},{"location":"#Table-of-contents-1","page":"Home","title":"Table of contents","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Pages = [\"index.md\", \"functions.md\", \"development.md\"]","category":"page"}]
}
