    //number of smileys to appear
    var numberOfFaces = 5;
    var theLeftSide = document.getElementById("leftSide");

    function generateFaces() {
      var n = 0;
          while (n < numberOfFaces) {
            // create random position for the smiley
            var imageTopPosition = Math.floor(Math.random() * 400);
            var imageLeftPosition = Math.floor(Math.random() * 400);
            var theBody = document.getElementsByTagName("body")[0];
            // create smiley
            var smiley = document.createElement("img");
            smiley.src = "img/smile.png";
            smiley.style.top = imageTopPosition + "px";
            smiley.style.left = imageLeftPosition + "px";
            theLeftSide.appendChild(smiley);
            n++;
          }

        //clone left side to the right
        var theRightSide = document.getElementById("rightSide");
        var leftSideImages = theLeftSide.cloneNode(true);
        leftSideImages.removeChild(leftSideImages.lastChild);
        theRightSide.appendChild(leftSideImages);

        // function that handles the click on last element
        theLeftSide.lastChild.onclick = function nextLevel(event) {
              event.stopPropagation();
              numberOfFaces += 5;

              //remove images between levels to avoid duplicating and same positioning
              while (theLeftSide.firstChild) {
                theLeftSide.removeChild(theLeftSide.firstChild);
              }
              while (theRightSide.firstChild) {
                theRightSide.removeChild(theRightSide.firstChild);
              }
              generateFaces();
        }
        //clicking anything except the proper smiley alerts Game Over and ends the game
        theBody.onclick = function gameOver() {
          alert("Game Over!");
          theLeftSide.lastChild.onclick = null;
          //play another game?
            (function() {
                if (confirm("Do you want to play again?") == true) {
                  location.reload();
            } else {
              theBody.onclick = null;
            }
          })();
        }
    }