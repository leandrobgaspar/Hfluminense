// Material UI
import * as React from "react";

function Presentation() {

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="flex flex-col md:flex-col text-center items-center justify-center bg-gray-900 text-white ">
          {/* Imagem */}
          <div className="flex justify-center md:justify-start mb-6">
            <img src="/apple-icon.png" alt="Em Manutenção" className="w-56" />
          </div>

          {/* Texto e botões */}
          <div className="text-center  space-y-6">
           
          </div>
        </div>
        <div className="text-white p-6 mt-10 mx-4 md:mx-20 mb-10 border-2 border-red-600 rounded-xl">
          <h2 className="text-3xl font-bold text-center mb-6 text-red-600">
            Nota Oficial Hospital Fluminense
          </h2>
          <p className="text-justify leading-relaxed space-y-4">
            Em resposta ao comunicado oficial divulgado pela Prefeitura de Belford Roxo em 4 de
            abril de 2025, que aponta supostos indícios de fraude e problemas administrativos na
            gestão do Hospital Central da Baixada Fluminense Ltda., esclarecemos os seguintes
            pontos:
            <br />
            <br />
            Ao longo dos anos, o hospital se tornou referência em atendimento humanizado e eficaz,
            sendo essencial para garantir assistência médica de qualidade à população de Belford
            Roxo e municípios vizinhos. Sua atuação sempre se pautou pelo compromisso com a vida,
            respeito e excelência na prestação de serviços essenciais de saúde.
            <br />
            <br />
            Desde dezembro de 2024, a Secretaria Municipal de Saúde não efetuou os repasses
            financeiros devidos ao hospital, comprometendo diretamente a continuidade dos serviços.
            <br />
            <br />
            Mesmo diante da inadimplência do município, a instituição manteve os atendimentos de
            forma ininterrupta, arcando com custos operacionais para evitar prejuízos irreparáveis à
            população e reafirmando seu compromisso com a saúde pública.
            <br />
            <br />
            Diversas notificações foram enviadas à Secretaria Municipal de Saúde solicitando os
            repasses necessários para a manutenção dos serviços. Nenhuma resposta oficial foi
            recebida, demonstrando omissão administrativa por parte do município.
            <br />
            <br />
            A única manifestação formal ocorreu no Processo nº 109-7-2025, no qual o hospital se
            comprometeu documentalmente a regularizar a Certidão Negativa de Débitos (CND) assim que
            os repasses fossem efetuados, esclarecendo que os atrasos reiterados impediram sua
            emissão.
            <br />
            <br />
            Todas as demais certidões obrigatórias estão vigentes, à exceção da CND, cuja
            regularização já foi formalmente assumida pelo hospital, condicionada ao recebimento dos
            repasses dos meses em aberto (dezembro de 2024, janeiro, fevereiro e março de 2025).
            <br />
            <br />
            A alegação da Prefeitura de que a suspensão dos repasses decorre da suposta
            irregularidade na CND não possui respaldo legal. A legislação vigente é clara: a
            retenção de pagamentos por ausência de CND não está prevista no artigo 87 da Lei nº
            8.666/93, tornando essa prática ilegal e configurando enriquecimento ilícito por parte
            do Poder Público.
            <br />
            <br />
            Portanto, a alegação de irregularidades generalizadas por parte do hospital não condiz
            com a realidade e se sustenta em justificativas infundadas.
            <br />
            <br />
            O fechamento definitivo do Hospital Infantil de Areia Branca, consequência direta da
            inadimplência da Prefeitura, reforça a má-fé administrativa e o abuso de poder, deixando
            milhares de cidadãos sem assistência médica.
            <br />
            <br />
            Por quatro meses, a Prefeitura se beneficiou diretamente dos serviços prestados pelo
            hospital, enquanto permaneceu inadimplente, transferindo à instituição um ônus indevido
            e inviabilizando financeiramente a continuidade dos atendimentos.
            <br />
            <br />
            Diante do exposto, fica evidente que o Hospital Central da Baixada Fluminense Ltda. tem
            sido vítima da inadimplência da Administração Pública, que, além de descumprir suas
            obrigações financeiras, tenta justificar ilegalmente a retenção de pagamentos por meio
            de alegações infundadas sobre certidões obrigatórias.
            <br />
            <br />
            O hospital reafirma seu compromisso com a população e seguirá tomando todas as medidas
            legais cabíveis para reverter essa situação, garantindo que os atendimentos sejam
            mantidos sem imposições arbitrárias e com a responsabilidade que a saúde pública exige.
            Além disso, destaca sua preocupação com os 148 trabalhadores e suas famílias, bem como a
            manutenção das obrigações trabalhistas com caráter alimentar.
            <br />
            <br />
            Atenciosamente,
            <br />
            Todas as diretorias do Hospital Central da Baixada Fluminense Ltda.
          </p>
        </div>
      </div>

      {/* Nota Oficial grande */}
    </>
  );
}

export default Presentation;
