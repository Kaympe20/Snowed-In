<template>
    <div class="content">
        <div class="section">
            <div class="triangle-container">
                <div class="triangle"></div>
            </div>
            <div class="snow"></div>
            <div class="mountain">
                
            </div>

        </div>
    </div>
</template>
<style scoped>
    body {
        margin: 0;
        padding: 0;
    }

    .section {
        width: 100%;
        min-height: 100vh;
        background-image: linear-gradient(rgb(144, 197, 243), rgb(7, 46, 100));
        background-attachment: fixed;
        position: relative;
    }

    .triangle {
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 100vh 0 0 100vw;
        border-color: transparent transparent transparent rgb(129, 129, 129);
        z-index: 1;
    }

    .snow {
        position: absolute;
        background-color: aliceblue;
        height: 5px;
        width: sqrt(calc(calc(100vw*100vw) + calc(100vh*100vh)));
        transform: rotate(atan(100vh / 100vw));
        z-index: 10;
    }
    
</style>