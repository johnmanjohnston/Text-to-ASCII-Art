String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, "g"), replacement);
};

const data = {
    "simple": {
        "*": `___
              |CHAR|
              ‾‾‾`,
        " ": `1em`
    },

    "bordered": {
        "*": `
.......
| CHAR |
....... `.replaceAll(" ", "⠀").replace("\n", "")
    },

    "dots": {
        " ": "1em",
        "a": `
.....
.  .
.....
.  .
.  .  
`.replaceAll(" ", "⠀").replace("\n", ""),

        "b": `
....
.  .
.....
.   .
.....  
`.replaceAll(" ", "⠀").replace("\n", ""),

        "c": `
.....
.  
.  
.  
.....  
`.replaceAll(" ", "⠀").replace("\n", ""),

        "d": `
.....
.   .
.    .
.   .
....    
`.replaceAll(" ", "⠀").replace("\n", ""),

        "e": 
`.......
.
...
.
........ 
`.replaceAll(" ", "⠀").replace("", ""),

        "f": `
.......
.
.....
.
.    
`.replaceAll(" ", "⠀").replace("\n", ""),

        "g": `
.......
.   
.   ...
.     .
........   
`.replaceAll(" ", "⠀").replace("\n", ""),

        "h": `
.     .
.     .
...........
.     .
.     .  
`.replaceAll(" ", "⠀").replace("\n", ""),

        "i": `
........
  .
  .
  .
........ 
`.replaceAll(" ", "⠀").replace("\n", ""),

        "j": `
...............
    .
    .
.   .
  .       
`.replaceAll(" ", "⠀").replace("\n", ""),

        "k": `
.   .
.  .
. . 
.  .
.   .  
`.replaceAll(" ", "⠀").replace("\n", ""),

        "l": `
.
.
.
.
...........  
`.replaceAll(" ", "⠀").replace("\n", ""),

        "m": `
..     .. 
. .   . .
.  . .  .
.   .   .
.       .  
`.replaceAll(" ", "⠀").replace("\n", ""),

        "n": `
.    .
..   .
. .  .
.  . .
.   ..  
`.replaceAll(" ", "⠀").replace("\n", ""),

        "o": `
 ......
.    .
.    .
.    .
 ......  
`.replaceAll(" ", "⠀").replace("\n", ""),

        "p": `
.....
.   .
.....
.  
.     
`.replaceAll(" ", "⠀").replace("\n", ""),

        "q": `
.........
.  .    .
.   .   .
.........
      .  
`.replaceAll(" ", "⠀").replace("\n", ""),

        "r": `
.....
.   .
.....
.   .
.    .  
`.replaceAll(" ", "⠀").replace("\n", ""),

        "s": `
 ....
.    
.....
   .
....  
`.replaceAll(" ", "⠀").replace("\n", ""),

        "t": `
........
  .
  .
  .
  .    
`.replaceAll(" ", "⠀").replace("\n", ""),

    "u": `  
    
.     .
.     .
.     .
.     .
  ....     
`.replaceAll(" ", "⠀").replace("\n", ""),

        "v": `
.   .
.   .
.   .
 . .
  .   
`.replaceAll(" ", "⠀").replace("\n", ""),

        "w": `
 .   ..   .
 .   ..   .
 .   ..   .
  . . . .
   .    .   
`.replaceAll(" ", "⠀").replace("\n", ""),

        "x": `
.   .
 . .
  .
 . .
.   .   
`.replaceAll(" ", "⠀").replace("\n", ""),

        "y": `
.   .
 . .
  .
  .
  .   
`.replaceAll(" ", "⠀").replace("\n", ""),

        "z": `
........
   .
  .
 .
.......   
`.replaceAll(" ", "⠀").replace("\n", ""),

        "!": `
.
.
.
.

.
`.replaceAll(" ", "⠀").replace("\n", ""),

        "?": `
 .... 
..  ..
.   ..
   .
   
   .   
`.replaceAll(" ", "⠀").replace("\n", ""),
    }
};

export { data };

/*
      __   __   __   ___  ___  __                                    __   __   __   __   __  ___                        __ 
 /\  |__) /  ` |  \ |__  |__  / _` |__| |    | |__/ |     |\/| |\ | /  \ |__) /  \ |__) /__`  |  |  | \  / |  | \_/ \ /  / 
/~~\ |__) \__, |__/ |___ |    \__> |  | | \__/ |  \ |___  |  | | \| \__/ |    \__X |  \ .__/  |  \__/  \/  |/\| / \  |  /_ 
                                                                                                                           
      __   __   __   ___  ___  __                                    __   __   __   __   __  ___                        __ 
 /\  |__) /  ` |  \ |__  |__  / _` |__| |    | |__/ |     |\/| |\ | /  \ |__) /  \ |__) /__`  |  |  | \  / |  | \_/ \ /  / 
/~~\ |__) \__, |__/ |___ |    \__> |  | | \__/ |  \ |___  |  | | \| \__/ |    \__X |  \ .__/  |  \__/  \/  |/\| / \  |  /_ 
                                                                                                                           
*/
