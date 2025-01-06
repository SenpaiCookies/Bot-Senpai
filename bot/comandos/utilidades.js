//REQUERINDO MÓDULOS
import {criarTexto, erroComandoMsg, consoleErro} from '../lib/util.js'
import api from '@victorsouzaleal/lbot-api-comandos'
import * as socket from '../baileys/socket.js'
import {tiposMensagem} from '../baileys/mensagem.js'
import {downloadMediaMessage } from '@whiskeysockets/baileys'
import {comandosInfo} from '../comandos/comandos.js'


export const utilidades = async(c, mensagemBaileys, botInfo) => {
    //Atribuição de valores
    const comandos_info = comandosInfo(botInfo)
    const {prefixo} = botInfo
    const {
        texto_recebido,
        remetente,
        comando,
        mensagem_midia,
        args,
        tipo,
        mensagem,
        id_chat,
        mensagem_citada,
        midia,
        citacao
    } = mensagemBaileys
    const {mimetype} = {...midia}
    const comandoSemPrefixo = comando.replace(prefixo, "")

    //Comandos de utilidades
    try{
        switch(comandoSemPrefixo){    
            case "criarimg":
                try{
                    if(!args.length) return await socket.responderTexto(c, id_chat, erroComandoMsg(comando, botInfo), mensagem)
                    let usuarioTexto = texto_recebido
                    await socket.responderTexto(c, id_chat, comandos_info.utilidades.criarimg.msgs.espera, mensagem)
                    let {resultado: resultadoImagem} = await api.IA.obterImagemIA(usuarioTexto)
                    await socket.responderArquivoUrl(c, tiposMensagem.imagem, id_chat, resultadoImagem, '', mensagem) 
                } catch(err){
                    if(!err.erro) throw err
                    await socket.responderTexto(c, id_chat, criarTexto(comandos_info.outros.erro_api, comando, err.erro) , mensagem)
                }
                break
                
            case "ddd":
                try{
                    let DDD
                    if(mensagem_citada){
                        let DDI = citacao.remetente.slice(0,2)
                        if(DDI != "55") return await socket.responderTexto(c, id_chat, comandos_info.utilidades.ddd.msgs.somente_br ,mensagem)
                        DDD = citacao.remetente.slice(2,4)
                    } else if(args.length){
                        DDD = texto_recebido
                    } else {
                        return await socket.responderTexto(c, id_chat, erroComandoMsg(comando, botInfo), mensagem)
                    }
                    let {resultado: resultadoDDD} = await api.Gerais.obterInfoDDD(DDD)
                    await socket.responderTexto(c, id_chat, criarTexto(comandos_info.utilidades.ddd.msgs.resposta, resultadoDDD.estado, resultadoDDD.regiao), mensagem)
                } catch(err){
                    if(!err.erro) throw err
                    await socket.responderTexto(c, id_chat, criarTexto(comandos_info.outros.erro_api, comando, err.erro) , mensagem)
                }
                break
        }
    } catch(err){
        await socket.responderTexto(c, id_chat, criarTexto(comandos_info.outros.erro_comando_codigo, comando), mensagem)
        err.message = `${comando} - ${err.message}`
        consoleErro(err, "UTILIDADES")
    }
    

}