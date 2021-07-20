window.onload = function() {

    
    let slot1 = document.getElementById("slot1")
    let slot4 = document.getElementById("slot2")
    let slot3 = document.getElementById("slot3")
    let speedInput = document.getElementById("speedInput")
    
    let spinButton = document.getElementById('spinBtn')
    
    
    
    let values = ['😎','😂','🥴','😢','🤑','🙄','😅','🤩','😭']
    
    function changeValue() {
        return values[Math.floor(Math.random() * 9)]
    }
    
    let animationId;
    
    function animationReset(speedVal, timeDur) {
        if(animationId) clearInterval(animationId)
    
        animationId = setInterval( function () {
       
            slot1.innerText = changeValue()
            slot2.innerText = changeValue()
            slot3.innerText = changeValue()
            
            },1000 * speedVal)
        
        let x=timeDur+1;
        let timerId;
        timerId = setInterval(() => {
            --x;
            spinButton.innerText = `${x}`;
    
            if(x === 0) {
                clearInterval(animationId);
                clearInterval(timerId);
                document.documentElement.style.setProperty("--speed",0)
                spinButton.innerText = "START SPINNING";
    
    
                // return;
            }
        }, 1000);
    }
    
    /* speedInput.onchange = function (event) {
        let currentSpeed = event.target.value;
        document.documentElement.style.setProperty("--speed",currentSpeed)
        animationReset(currentSpeed)
    } */
    
    spinButton.onclick = function(event) {
    
        let currentSpeed = 1.1 - (speedInput.value / 10);
    
        document.documentElement.style.setProperty("--speed",currentSpeed)
    
        let randomTime = Math.floor((Math.random() * 7)+ 8);
        animationReset(currentSpeed , randomTime );
    
    }
    }
    