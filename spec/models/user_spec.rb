require 'spec_helper'

describe User do
  

  it { should respond_to(:name) }
  it { should respond_to(:guess) }
  it { should respond_to(:game_number) }
end
