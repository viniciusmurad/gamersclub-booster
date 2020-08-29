let opcoes = {};
chrome.storage.sync.get(['autoAceitarPreReady', 'autoCopiarIp', 'autoAceitarReady', 'autoConcordarTermosRanked'], function (result) {
    opcoes = result;
    initLobby();
});

const initLobby = () => {
    if ( opcoes.autoAceitarPreReady ) {
        const intervalAceitar = setInterval(function() {
            const buttonAceitar = document.getElementById('playNowOverlayReady');
            if (buttonAceitar && buttonAceitar.textContent === 'Ready') {
                buttonAceitar.click();
            }
        }, 5000);
    }
    if ( opcoes.autoCopiarIp ) {
        const intervalCopia = setInterval(function() {
            const buttonCopia = document.getElementById('gameModalCopyServer');
            if (buttonCopia && buttonCopia.textContent === 'Copiar IP') {
                buttonCopia.click();
            }
        }, 5000);
    }
    if ( opcoes.autoAceitarReady ) {
        const intervalAceitar = setInterval(function() {
            const buttonAceitarReady = document.getElementById('gameModalReadyBtn');
            if (buttonAceitarReady && buttonAceitarReady.textContent === 'Ready') {
                buttonAceitarReady.click();
            }
        }, 5000);
    }
    //Auto concordar com termos da ranked.
    $('#rankedqualifyModal, #rankedopenModal, #rankedproModal, #rankedchallengeModal').on('transitionend', concordarTermos);
};

function concordarTermos(e) { 
    if ( opcoes.autoConcordarTermosRanked ) {
        if (!['rankedqualifyModal', 'rankedopenModal', 'rankedproModal', 'rankedchallengeModal'].includes(e.target.id)) return;
        if (!e.target.classList.contains('game-modal-fade-in')) return;
        const metodo = $('.ranked-modal-agree>a').attr('onclick');
        location.href=`${metodo}; void 0`;
    }
}
