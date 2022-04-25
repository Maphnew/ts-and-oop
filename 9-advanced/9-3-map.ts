{
  type Video = {
    title: string;
    author: string;
  };

  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoOptional = Optional<Video>;
  type VideoReadOnly = ReadOnly<Video>;

  type Animal = {
    name: string;
    age: number;
  };
  const animal: Optional<Animal> = {
    name: "dog",
  };
  animal.name = "cat";

  const video: VideoReadOnly = {
    title: "movie A",
    author: "someone",
  };
  // video.title = 'B'; // Cannot assign to 'title' because it is a read-only property.

  // type VideoOptional = {
  //     title?: string;
  //     author?: string;
  // };
  // type VideoReadOnly = {
  //     readonly title: string;
  //     readonly author: string;
  // }
  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullable<Video> = {
    title: null,
    author: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
