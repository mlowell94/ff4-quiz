# ff4-quiz
  I made this in roughly 7/8 hours total over two days. I felt like I still needed some practice with forms after finishing up TOP's lessons on them, 
so I decided to see if there was a way I could synthesize my need to practice forms with my need to pracitce arrays in Javascript. I also placed the restriction on myself
to use flexbox as little as possible unless it just made sense to use it. I think my over-reliance on it has hurt my understanding of more basic css attributes.
  
  My plan (predicated on the assumption that I would be able to iterate through a directory) was to have the javascript iterate through 
directories based on what size and color the user  selected and place them into an array, then use their text to generate a number 
between 1 and 9 that would be used to access that array. Despite spending several hours searching, I was unable to find a way to access the file system in the client.
Instead, what I did was rename all files to a number between 1 and 9, and adding their paths to an array by using a for loop to add a path comprised of the values
submitted by the user. 

Some styling issues I ran into:
How to get raido buttons and their inputs to align vertically? - I had to use flexbox here after placing the input and label in the same div.
Color Selector/Button - Probably the hardest part about styling this was using the FF4 SNES font. There's several pixels of space on top of each character that are just 
                        empty, so I had to push them up with padding. There's still some weirdness with the height/width of certain characters but I think that's mostly
                        an issue borne out of the fact that these were not fonts intended to be used outside of the SNES, much less on the internet.
