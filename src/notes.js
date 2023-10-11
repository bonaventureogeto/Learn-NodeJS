import { getDB, saveDB, insert } from "./db.js";

// CREATE
export const newNote = async (note, tags) => {
  const data = {
    tags,
    content: note,
    id: Date.now(),
  };
  await insert(data);
  return data;
};

// READ
export const getAllNotes = async () => {
  const db = await getDB();
  return db.notes;
};

// UPDATE
export const findNotes = async (filter) => {
  const notes = await getAllNotes();
  return notes.filter((note) =>
    note.content.toLowerCase().includes(filter.toLowerCase())
  );
};

// DELETE
export const removeNote = async (id) => {
  const notes = await getAllNotes();
  const match = notes.find((note) => note.id === id);

  if (match) {
    const newNotes = notes.filter((note) => note.id !== id);
    await saveDB({ notes: newNotes });
    return id;
  }
};

export const removeAllNotes = async () => {
  await saveDB({ notes: [] });
};
