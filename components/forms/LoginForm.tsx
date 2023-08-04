import TextInput from '../ui/form/TextInput';
import CheckBox from '../ui/form/Checkbox';

const LoginForm: React.FC= (props) => {
    return (
      <form className="space-y-6" action="#" method="POST">
        <div className="relative -space-y-px rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300" />
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <TextInput
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <TextInput
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="Password"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <CheckBox id="remember-me" name="remember-me" />
            <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-900">
              Remember me
            </label>
          </div>

          <div className="text-sm leading-6">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Forgot password?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>
    )
}

export default LoginForm;