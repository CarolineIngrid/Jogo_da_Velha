$(document).ready(function(){

    $('#btn_iniciar_jogo').click(function(){

        //valida apelido jogadores
        if($('#entrada_nome_jogador_1').val() == ''){
            alert('Nome  jogador 1 não foi preenchido!');
            return false;
        }
        if($('#entrada_nome_jogador_2').val() == ''){
            alert('Nome do jogador 2 não foi preenchido!');
            return false;
        }
        
       
        // exibir os nomes 
        $('#nome_jogador_1').html($('#entrada_nome_jogador_1').val());
        $('#nome_jogador_2').html($('#entrada_nome_jogador_2').val());

        //
        $('#pagina_inicial').hide();
        $('#palco_jogo').show();
    })

    $('.jogada').click(function(){
        
        var id_campo_clicado = this.id;
        alert(id_campo_clicado);
    });

});