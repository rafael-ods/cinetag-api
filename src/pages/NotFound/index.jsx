import Container from 'components/Container'
import Title from 'components/Title'
import React from 'react'

const NotFound = () => {
  return (
    <>
      <Container>
        <Title>
            <h2>Ops</h2>
        </Title>
            <p>O conteudo que você procura não foi encontrado!</p>
      </Container>
    </>
  )
}

export default NotFound
