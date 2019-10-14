################################################################
################################################################
# Entering_Commands
################################################################
################################################################
# # Copy of Julia Functions/Types

################################################################
# ansM can't be defined. use ans instead.
################################################################
"""
    clcM()

Clear Command Window. Works for any IDE or console.
"""
function clcM()

    if !isdefined(Main, :Juno)
        println("\33[2J")
    end

end