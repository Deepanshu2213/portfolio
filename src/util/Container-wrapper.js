import Container from "../Components/Container";
const wrappedCmp = (Component,light=false)=>{
    return ()=>{
        return (
        <Container light={light}>
          <Component/>
        </Container>
        )
    }


}
export default wrappedCmp;