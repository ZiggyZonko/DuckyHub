CREATE TABLE IF NOT EXISTS visitor_stats (
    id INTEGER PRIMARY KEY CHECK (id = 1),
    count INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    message TEXT NOT NULL,
    date TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS messages_date_idx ON messages (date DESC);
