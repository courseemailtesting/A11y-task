export function RadioButtons() {
  return (
    <fieldset style={{ border: 'none' }}>
      <legend>Purpose of travel</legend>

      <div>
        <input
          type='radio'
          id='tourism'
          name='purpose-of-travel'
          value='tourism'
          checked
        />
        <label for='tourism'>tourism</label>
      </div>

      <div>
        <input
          type='radio'
          id='study / mental work'
          name='purpose-of-travel'
          value='study / mental work'
        />
        <label for='study / mental work'>study / mental work</label>
      </div>

      <div>
        <input
          type='radio'
          id='physical work'
          name='purpose-of-travel'
          value='physical work'
        />
        <label for='physical work'>physical work</label>
      </div>
      <div>
        <input
          type='radio'
          id='physical work'
          name='purpose-of-travel'
          value='physical work'
        />
        <label for='physical work'>physical work</label>
      </div>
    </fieldset>
  );
}
