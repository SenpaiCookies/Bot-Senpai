import path from 'node:path'
import fs from 'fs-extra'


export class Bot{
    constructor(){
        this.caminhoJSON =  path.resolve("dados/bot.json")
    }


    async atualizarDados(dados){
        fs.writeFileSync(this.caminhoJSON, JSON.stringify(dados))
    }

    async obterDados(){
        return JSON.parse(fs.readFileSync(this.caminhoJSON))
    }

    async atualizarComandos(){
        let bot = await this.obterDados()
        bot.cmds_executados++
        await this.atualizarDados(bot)
    }

    async atualizarFigurinhasFeitas(comando){
        let bot = await this.obterDados()
        bot.contagem_fig.mes.geral++
        bot.contagem_fig.total++
        switch (comando) {
            case "s":
                bot.contagem_fig.mes.s++
            break;

            case "ssf":
                bot.contagem_fig.mes.ssf++
            break;
            
            case "sgif":
                bot.contagem_fig.mes.sgif++
            break;
            
            case "snome":
                bot.contagem_fig.mes.snome++
            break;

            case "simg":
                bot.contagem_fig.mes.simg++
            break;

            case "emojimix":
                bot.contagem_fig.mes.emojimix++
            break;
        }
        await this.atualizarDados(bot)
    }

    async resetarFigurinhasFeitasMes(){
        let bot = await this.obterDados()
        bot.contagem_fig.mes.geral = 0
        bot.contagem_fig.mes.s = 0
        bot.contagem_fig.mes.sgif = 0
        bot.contagem_fig.mes.snome = 0
        bot.contagem_fig.mes.simg = 0
        bot.contagem_fig.mes.emojimix = 0
        await this.atualizarDados(bot)
    }

    async alterarProximoMesFigurinha(timestamp){
        let bot = await this.obterDados()
        bot.contagem_fig.mes.expiracao_mes = timestamp
        await this.atualizarDados(bot)
    }
}