for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        var button = this.innerHTML;
        drumSound(button);
        animation(button);
    });
}


document.addEventListener("keydown",function(event)
{
    drumSound(event.key);
    animation(event.key)
});

function drumSound(button)
{
        switch(button)
        {
            case "w": var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

            case "a": var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

            case "s": var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

            case "d": var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

            case "j": var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

            case "k": var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

            case "l": var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
            
        }
}

function animation(button)
{
    var activeButton = document.querySelector("."+button);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }
    ,100);
}