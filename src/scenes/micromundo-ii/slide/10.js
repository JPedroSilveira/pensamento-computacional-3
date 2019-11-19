import React from 'react'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'
import TextBNCC from '../../../components/text/bncc'
import SubtitleBar from '../../../components/subtitle-bar'
import Activities from '../../../services/activities'
import IntegralActivity from '../../../components/integral-activity'


/*Props:
    unitId: String, representa o id da unidade em que a atividade se encontra
.*/
class SlideTen extends React.Component {

  constructor(props) {
    super(props)
    this.props.setHeader()
  }

  render() {
    return (
      <ContentBox>
        <PrimaryText>
          <SubtitleBar type={3} title='Questão Avaliativa - 5' subtitle='Produtos, marcas e preços'/>
          <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em: Matemática e Língua Portuguesa.</TextBNCC>
          <p>Considere o pilar Algoritmos, e selecione a alternativa <b>menos adequada</b> para aplicação desse pilar no contexto desta situação-problema.</p>
          <IntegralActivity activity={Activities.getMicromundoIIActiviryFive(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideTen
