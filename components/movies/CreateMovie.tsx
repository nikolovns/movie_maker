export function CreateMovie() {
  return (
    <form>
      <div>
        <label htmlFor="name">Movie name:</label>
      </div>
      <div>
        <input type="text" name="name" id="name" />
      </div>
    </form>
  )
}