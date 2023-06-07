-- Readers
INSERT INTO readers (username) VALUES
('john_doe'),
('jane_doe'),
('bob_smith'),
('alice_wonderland'),
('charlie_brown');

-- Addresses
INSERT INTO addresses (reader_id, street, city, state) VALUES
(1, '123 Main St', 'Anytown', 'CA'),
(2, '456 Broadway', 'Somewhere', 'NY'),
(3, '789 Oak Ave', 'Nowhere', 'TX'),
(4, '111 Elm St', 'Anywhere', 'FL'),
(5, '222 Pine St', 'Everywhere', 'WA');

-- Books
INSERT INTO books (title, author, published_date, isbn) VALUES
('To Kill a Mockingbird', 'Harper Lee', '1960-07-11', 9780061120084),
('1984', 'George Orwell', '1949-06-08', 9780451524935),
('Pride and Prejudice', 'Jane Austen', '1813-01-28', 9780141439518),
('The Catcher in the Rye', 'J.D. Salinger', '1951-07-16', 9780316769488),
('The Great Gatsby', 'F. Scott Fitzgerald', '1925-04-10', 9780743273565);

-- Reviews
INSERT INTO reviews (book_id, reader_id, review_content, rating) VALUES
(1, 1, 'Great book!', 5),
(1, 2, 'Very moving', 4),
(2, 3, 'Disturbing but thought-provoking', 4),
(2, 4, 'Important and relevant', 5),
(3, 5, 'Classic romance', 4);

-- Readers_books
INSERT INTO readers_books (reader_id, book_id, checkout_date, return_date) VALUES
(1, 1, '2023-04-11', '2023-04-21'),
(1, 2, '2023-04-12', '2023-04-22'),
(2, 3, '2023-04-13', '2023-04-23'),
(3, 4, '2023-04-14', '2023-04-24'),
(4, 5, '2023-04-15', '2023-04-25');


