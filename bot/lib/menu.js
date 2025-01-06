
export const menuPrincipal  = (botInfo)=> { 
    let {nome_bot, nome_adm, prefixo} = botInfo
    return `|
|>----〖 *🤖 ${nome_bot?.trim()}®* 〗
|
|>---〖🔎 *MENU PRINCIPAL*〗
|
|- Digite um dos comandos abaixo:
|
|- *${prefixo}menu* 0  ❓ Informação
|- *${prefixo}menu* 1  🖼️ Figurinhas
|- *${prefixo}menu* 2  ⚒️ Utilidades
|- *${prefixo}menu* 3  📥 Downloads
|- *${prefixo}menu* 4  👨‍👩‍👧‍👦 Grupo
|- *${prefixo}menu* 5  🔄 Atualização/Canal
|
╰╼❥ ${nome_bot?.trim()}® by *${nome_adm?.trim()}*`
}

export const menuFigurinhas = (botInfo)=>{
    let {nome_bot, nome_adm, prefixo} = botInfo
    return `|
|>----〖 *🤖 ${nome_bot?.trim()}®* 〗
|
|>- Guia ❔: *${prefixo}comando* guia
|
|>---〖🖼️ *FIGURINHAS*〗
|
|- *${prefixo}s* - Transfome uma IMAGEM/VIDEO em *sticker*.
|- *${prefixo}s* 1 - Transfome uma IMAGEM em *sticker circular*.
|- *${prefixo}snome* pack, autor - Renomeia o sticker.
|- *${prefixo}simg* - Transforme um STICKER NÃO ANIMADO em *foto*.
|- *${prefixo}ssf* - Transforme uma IMAGEM em *sticker sem fundo*.
|- *${prefixo}emojimix* 💩+😀 - Tranforme 2 emojis em *sticker*
|
╰╼❥ ${nome_bot?.trim()}® by *${nome_adm?.trim()}*`
}

export const menuInfoSuporte = (botInfo)=>{
    let {nome_bot, nome_adm, prefixo} = botInfo
    return `|
|>----〖 *🤖 ${nome_bot?.trim()}®* 〗
|
|>- Guia ❔: *${prefixo}comando* guia
|
|>---〖❓ *INFO/SUPORTE*〗
|
|- *${prefixo}info* - Informações do bot e contato do dono.
|- *${prefixo}reportar* mensagem - Reporte um problema para o dono.
|- *${prefixo}meusdados* - Exibe seus dados de uso .
|
╰╼❥ ${nome_bot?.trim()}® by *${nome_adm?.trim()}*`
}

export const menuDownload = (botInfo)=>{
    let {nome_bot, nome_adm, prefixo} = botInfo
    return `|
|>----〖 *🤖 ${nome_bot?.trim()}®* 〗
|
|>- Guia ❔: *${prefixo}comando* guia
|
|>---〖📥 *DOWNLOADS*〗
|
|- *${prefixo}play* nome- Faz download de uma música e envia.
|- *${prefixo}yt* nome - Faz download de um video do Youtube e envia.
|- *${prefixo}fb* link - Faz download de um video do Facebook e envia.
|- *${prefixo}ig* link - Faz download de videos/fotos do Instagram e envia.
|- *${prefixo}tw* link - Faz download de um video/foto do Twitter e envia.
|- *${prefixo}tk* link - Faz download de um video do Tiktok e envia.
|- *${prefixo}img* tema - Faz download de uma imagem e envia.
|
╰╼❥ ${nome_bot?.trim()}® by *${nome_adm?.trim()}*`
}

export const menuUtilidades = (botInfo)=>{
    let {nome_bot, nome_adm, prefixo} = botInfo
    return `|
|>----〖 *🤖 ${nome_bot?.trim()}®* 〗
|
|>- Guia ❔: *${prefixo}comando* guia
|
|>---〖⚒️ *UTILITÁRIOS*〗
|
|- *${prefixo}criarimg* frase - Cria uma imagem de acordo com a frase usando IA.
|- *${prefixo}ddd* - Responda alguém para ver o estado/região.
|
|
╰╼❥ ${nome_bot?.trim()}® by *${nome_adm?.trim()}*`
}

export const menuGrupo = (admin, botInfo)=>{
    let {nome_bot, nome_adm, prefixo} = botInfo
    if(admin){
        return `|
|>----〖 *🤖 ${nome_bot?.trim()}®* 〗
|
|>- Guia ❔: *${prefixo}comando* guia
|
|>---〖👨‍👩‍👧‍👦 *GRUPO*〗
|
|--〖🛠️ *GERAL*〗
|
|- *${prefixo}status* - Vê os recursos ligados/desligados.
|- *${prefixo}regras* - Exibe a descrição do grupo com as regras.
|- *${prefixo}adms* - Lista todos administradores.
|- *${prefixo}fotogrupo* - Altera foto do grupo
|- *${prefixo}mt* mensagem - Marca todos MEMBROS/ADMINS com uma mensagem.
|- *${prefixo}mm* mensagem - Marca os MEMBROS com uma mensagem.
|- *${prefixo}dono* - Mostra dono do grupo.
|
|--〖🎚️ *CONTROLE DE ATIVIDADE*〗
|
|- *${prefixo}contador* - Liga/desliga o contador de atividade (Mensagens).
|- *${prefixo}atividade* @marcarmembro - Mostra a atividade do usuário no grupo. 
|- *${prefixo}imarcar* 1-50 - Marca todos os inativos com menos de 1 até 50 mensagens.
|- *${prefixo}ibanir* 1-50 - Bane todos os inativos com  menos de 1 até 50 mensagens.
|- *${prefixo}topativos* 1-50 - Marca os membros mais ativos em um ranking de 1-50 pessoas.
|
|--〖🚫 *BLOQUEIO DE COMANDOS*〗
|
|- *${prefixo}bcmd* [comando1 comando2 etc] - Bloqueia os comandos escolhidos no grupo.
|- *${prefixo}dcmd* [comando1 comando2 etc] - Desbloqueia os comandos escolhidos no grupo.
|
|--〖🗒️ *LISTA NEGRA*〗
|
|- *${prefixo}listanegra* - Exibe a lista negra do grupo.
|- *${prefixo}addlista* +55 (21) 9xxxx-xxxx - Adiciona o número na lista negra do grupo.
|- *${prefixo}remlista* +55 (21) 9xxxx-xxxx - Remove o número na lista negra do grupo.
|
|--〖🧰 *RECURSOS*〗 
|
|- *${prefixo}mutar* - Ativa/desativa o uso de comandos.
|- *${prefixo}autosticker* - Ativa/desativa a criação automática de stickers.
|- *${prefixo}alink* - Ativa/desativa o anti-link.
|- *${prefixo}bv* - Ativa/desativa o bem-vindo.
|- *${prefixo}afake* - Ativa/desativa o anti-fake.
|- *${prefixo}aflood* - Ativa/desativa o anti-flood.
|
|--〖⌨️ *ADMINISTRATIVO*〗
|
|- *${prefixo}add* +55 (21) 9xxxx-xxxx - Adiciona ao grupo.
|- *${prefixo}ban* @marcarmembro - Bane do grupo.
|- *${prefixo}restrito* - Abre/Restringe o grupo só para ADMS.
|- *${prefixo}promover* @marcarmembro - Promove a ADM.
|- *${prefixo}rebaixar* @marcaradmin - Rebaixa a MEMBRO.
|- *${prefixo}link* - Exibe o link do grupo.
|- *${prefixo}rlink* - Redefine o link do grupo.
|- *${prefixo}apg* - Apaga uma mensagem do grupo.
|- *${prefixo}bantodos* - Bane todos os membros.
|
|--〖👁️ *REVELAR MENSAGENS*〗
|
|- *${prefixo}revelar* - Revela o contéudo de uma mensagem de visualização única.
|
|--〖📊 *ENQUETE*〗
|
|- *${prefixo}enquete* pergunta,opcao1,opcao2,etc.. - Abre uma enquete com uma pergunta e as opçôes.
|
|
╰╼❥ ${nome_bot?.trim()}® by *${nome_adm?.trim()}*`
    } else {
        return `|
|>----〖 *🤖 ${nome_bot?.trim()}®* 〗
|
|>- Guia ❔: *${prefixo}comando* guia
|
|>---〖👨‍👩‍👧‍👦 *GRUPO*〗
|
|--〖🛠️ *GERAL*〗
|- *${prefixo}regras* - Exibe a descrição do grupo com as regras.
|- *${prefixo}adms* - Lista todos administradores.
|- *${prefixo}dono* - Mostra dono do grupo.
|
|--〖📊 *ENQUETE*〗
|- *${prefixo}enquete* pergunta,opcao1,opcao2,etc.. - Abre uma enquete com uma pergunta e as opçôes.
|
╰╼❥ ${nome_bot?.trim()}® by *${nome_adm?.trim()}*`
    }
}

export const menuAdmin = (botInfo)=>{
    let {nome_bot, nome_adm, prefixo} = botInfo
    return `|>---〖⚙️ *ADMINISTRAÇÃO*〗
|
|>- Guia ❔: *${prefixo}comando* guia
|
|--〖🎨 *CUSTOMIZAÇÃO*〗
|
|- *${prefixo}nomebot* nome - Altera nome do bot e atualiza menus
|- *${prefixo}nomeadm* nome - Altera nome do administrador e atualiza menus
|- *${prefixo}nomesticker* nome - Altera nome do pacote de figurinhas
|- *${prefixo}prefixo* simbolo - Altera o prefixo dos comandos
|- *${prefixo}fotobot* - Altera foto do BOT
|- *${prefixo}estado* online, offline ou manutencao - Altera o estado atual do bot.
|
|--〖🛠️ *GERAL*〗
|
|- *${prefixo}infobot* - Informação completa do BOT.
|- *${prefixo}infofig* numero - Mostra a informação sobre figurinhas criadas.
|- *${prefixo}ping* - Informação do sistema e de tempo de resposta.
|- *${prefixo}bloquear* @usuario  - Bloqueia o usuário mencionado.
|- *${prefixo}desbloquear* @usuario  - Desbloqueia o usuário mencionado.
|- *${prefixo}listablock*  - Lista todos os usuários bloqueados.
|- *${prefixo}bcgrupos* mensagem - Faz um anúncio com uma mensagem somente para os GRUPOS.
|- *${prefixo}desligar* - Desliga o bot.
|
|--〖👤 *USUÁRIOS*〗
|
|- *${prefixo}verdados* @usuario - Mostra os dados do usuario cadastrado no bot.
|- *${prefixo}usuarios* tipo - Mostra todos os usuários do tipo escolhido.
|- *${prefixo}tipos* - Mostra todos os tipos de usuário disponíveis.
|- *${prefixo}novotipo* tipo, titulo, comandos - Cria um novo tipo de usuário.
|- *${prefixo}tipotitulo* tipo, titulo - Altera o titulo de um tipo de usuário.
|- *${prefixo}deltipo* tipo - Deleta um tipo de usuário.
|- *${prefixo}usuariotipo* tipo @usuario - Muda o tipo de conta do usuário.
|- *${prefixo}limpartipo* tipo - Limpa todos os usuários desse tipo e transforma em usuarios comuns.
|
|--〖🚫 *BLOQUEIO DE COMANDOS*〗 
|
|- *${prefixo}bcmdglobal* comando1 comando2 - Bloqueia os comandos escolhidos globalmente.
|- *${prefixo}dcmdglobal* comando1 comando2 - Desbloqueia os comandos escolhidos globalmente.
|
|--〖👤 *LIMITE DIÁRIO COMANDOS*〗
|
|- *${prefixo}limitediario* - Ativa/desativa o limite diario de comandos por dia de acordo com tipo de usuário.
|- *${prefixo}tipocomandos* tipo qtd-comandos - Muda o limite de comandos por dia de um tipo de usuário.
|- *${prefixo}rtodos* - Reseta os comandos diários de todos usuários.
|- *${prefixo}r* @usuario - Reseta os comandos diários de um usuário.
|
|--〖👤 *TAXA COMANDOS POR MINUTO*〗
|
|- *${prefixo}taxacomandos* qtd-comandos - Ativa/desativa a taxa de comandos por minuto.
|
|--〖👁️ *REVELAR MENSAGENS*〗
|
|- *${prefixo}autorevelar* - Ativa/desativa a revelação automatica de mensagens de visualização única.
|- *${prefixo}revelar* - Revela o contéudo de uma mensagem de visualização única.
|
|--〖🎚️ *CONTROLE*〗
|
|- *${prefixo}pvliberado* - Ativa/desativa os comandos em mensagens privadas.
|- *${prefixo}autostickerpv* - Ativa/desativa a criação automática de stickers no privado.
|
|--〖👨‍👩‍👧‍👦 *GRUPOS*〗
|
|- *${prefixo}grupos* - Mostra os grupos atuais.
|- *${prefixo}linkgrupo* numero - Mostra o link do grupo selecionado.
|- *${prefixo}sair* - Sai do grupo.
|- *${prefixo}sairgrupos* - Sai de todos os grupos.
|- *${prefixo}entrargrupo* link-grupo - BOT entra no grupo.
|
╰╼❥ ${nome_bot?.trim()}® by *${nome_adm?.trim()}*`
}

