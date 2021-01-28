import Book from './Book'

export default function RenderBooks(props) {
    const list = props.books
    const booksList = list.map((book, i) => {
        // return (<Book text={props.books[i].text} image={props.books[i].image} link={props.books[i].link} />);
        // console.log(book.text)
        const defaultImg = "https://dictionary.cambridge.org/ru/images/thumb/cross_noun_002_09265.jpg?version=5.0.147";
        return <Book key={i} image={book.image ?? defaultImg} text={book.text} link={(book.link || "#")}></Book>
    })

    return booksList
    // console.log(props.books[0].image);
}