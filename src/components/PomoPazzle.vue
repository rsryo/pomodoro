<template>
    <div class="board" id="board">
        <div class="cell" data-number="0"><button id="0">開く</button><img class="none" src="../assets/1.png"></div>
        <div class="cell" data-number="1"><button id="1">開く</button><img class="none" src="../assets/2.png"></div>
        <div class="cell" data-number="2"><button id="2">開く</button><img class="none" src="../assets/3.png"></div>
        <div class="cell" data-number="3"><button id="3">開く</button><img class="none" src="../assets/4.png"></div>
        <div class="cell" data-number="4"><button id="4">開く</button><img class="none" src="../assets/5.png"></div>
        <div class="cell" data-number="5"><button id="5">開く</button><img class="none" src="../assets/6.png"></div>
        <div class="cell" data-number="6"><button id="6">開く</button><img class="none" src="../assets/7.png"></div>
        <div class="cell" data-number="7"><button id="7">開く</button><img class="none" src="../assets/8.png"></div>
        <div class="cell" data-number="8"></div>
    </div>
    <div class="message"></div>

    <!-- モーダルのHTML構造 -->
    <div id="myModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h1>クリア</h1>
            <img id="clear" src="../assets/Cropped_Image.png" alt="クリア画像">
        </div>
    </div>
</template>