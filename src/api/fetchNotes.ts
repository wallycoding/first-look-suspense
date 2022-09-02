const notes = ["suspense", "fetch", "api", "loading"];
const responses = ["error", "success"] as const;

const fetchNotes = (response: typeof responses[keyof typeof responses]) =>
  new Promise<string[]>((resolve, reject) => {
    setTimeout(() => {
      switch (response) {
        case "success":
          resolve(notes);
        case "error":
          reject(Error("Fake error"));
      }
    }, 3000);
  });

export default fetchNotes;
