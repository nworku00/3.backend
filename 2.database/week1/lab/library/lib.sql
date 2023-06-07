CREATE TABLE readers (
    id serial PRIMARY KEY,
    username VARCHAR(25) NOT NULL,
    enabled BOOLEAN DEFAULT TRUE,
    last_login timestamp NOT NULL DEFAULT NOW()
);
CREATE TABLE addresses (
    reader_id int PRIMARY KEY NOT NULL,
    street VARCHAR(30) NOT NULL,
    city VARCHAR(30) NOT NULL,
    state VARCHAR(30) NOT NULL,
    CONSTRAINT fk_reader_id FOREIGN KEY (reader_id) REFERENCES readers (id)
);
CREATE TABLE books (
    id serial,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL,
    published_date timestamp NOT NULL,
    isbn bigint,
    PRIMARY KEY (id),
    UNIQUE (isbn)
);

CREATE TABLE reviews (
    id serial,
    book_id int NOT NULL,
    reader_id int NOT NULL,
    review_content VARCHAR(255),
    rating int,
    published_date timestamp DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE,
    FOREIGN KEY (reader_id) REFERENCES readers(id) ON DELETE CASCADE
);

CREATE TABLE readers_books (
    reader_id int NOT NULL,
    book_id int NOT NULL,
    checkout_date timestamp,
    return_date timestamp,
    PRIMARY KEY (reader_id, book_id),
    FOREIGN KEY (reader_id) REFERENCES readers(id) ON UPDATE CASCADE,
    FOREIGN KEY (book_id) REFERENCES books(id) ON UPDATE CASCADE
);

