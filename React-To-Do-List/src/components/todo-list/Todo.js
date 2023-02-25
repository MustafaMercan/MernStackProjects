import Container from './Container.js'
const Todo = () => {
    return (
        <div className="w-1/3 h-4/5 bg-orange-300 text-center rounded-xl">

            <h1 className="text-cyan-500 block font-bold text-2xl underline my-10">
                TO DO LIST APPLICATION
            </h1>
            <div>
                <Container/>
            </div>
        </div>
    );
}

export default Todo;