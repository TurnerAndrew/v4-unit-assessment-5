SELECT p.id AS post_id, title, content, img, profile_pic, date_created, upvotes, username AS author_username
FROM helo_posts p
JOIN helo_users u ON u.id = p.author_id
WHERE LOWER(title) like $1 AND author_username != p.author_id
ORDER BY date_created ASC;