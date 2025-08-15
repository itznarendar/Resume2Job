import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ComponentLibrary } from '../ComponentLibrary';

describe('ComponentLibrary', () => {
  const mockOnSelectComponent = vi.fn();
  
  const defaultProps = {
    selectedComponent: 'button',
    onSelectComponent: mockOnSelectComponent
  };

  beforeEach(() => {
    mockOnSelectComponent.mockClear();
  });

  it('renders all category filters', () => {
    render(<ComponentLibrary {...defaultProps} />);
    
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Input')).toBeInTheDocument();
    expect(screen.getByText('Layout')).toBeInTheDocument();
    expect(screen.getByText('Data')).toBeInTheDocument();
    expect(screen.getByText('Overlay')).toBeInTheDocument();
  });

  it('renders component list', () => {
    render(<ComponentLibrary {...defaultProps} />);
    
    expect(screen.getByText('Button')).toBeInTheDocument();
    expect(screen.getByText('Card')).toBeInTheDocument();
    expect(screen.getByText('Input')).toBeInTheDocument();
    expect(screen.getByText('Modal')).toBeInTheDocument();
    expect(screen.getByText('Form')).toBeInTheDocument();
    expect(screen.getByText('Navigation')).toBeInTheDocument();
  });

  it('highlights selected component', () => {
    render(<ComponentLibrary {...defaultProps} />);
    
    const buttonComponent = screen.getByText('Button').closest('div');
    expect(buttonComponent).toHaveClass('border-blue-500', 'bg-blue-50');
  });

  it('calls onSelectComponent when component is clicked', () => {
    render(<ComponentLibrary {...defaultProps} />);
    
    fireEvent.click(screen.getByText('Card'));
    expect(mockOnSelectComponent).toHaveBeenCalledWith('card');
  });

  it('filters components by category', () => {
    render(<ComponentLibrary {...defaultProps} />);
    
    // Click on Input category
    fireEvent.click(screen.getByText('Input'));
    
    // Should show input components
    expect(screen.getByText('Button')).toBeInTheDocument();
    expect(screen.getByText('Input')).toBeInTheDocument();
    expect(screen.getByText('Form')).toBeInTheDocument();
    expect(screen.getByText('Calendar')).toBeInTheDocument();
    
    // Should not show layout components
    expect(screen.queryByText('Card')).not.toBeInTheDocument();
    expect(screen.queryByText('Navigation')).not.toBeInTheDocument();
  });

  it('shows all components when "All" category is selected', () => {
    render(<ComponentLibrary {...defaultProps} />);
    
    // First select a specific category
    fireEvent.click(screen.getByText('Layout'));
    expect(screen.queryByText('Button')).not.toBeInTheDocument();
    
    // Then select "All"
    fireEvent.click(screen.getByText('All'));
    expect(screen.getByText('Button')).toBeInTheDocument();
    expect(screen.getByText('Card')).toBeInTheDocument();
    expect(screen.getByText('Navigation')).toBeInTheDocument();
  });

  it('displays component descriptions', () => {
    render(<ComponentLibrary {...defaultProps} />);
    
    expect(screen.getByText('Interactive button component')).toBeInTheDocument();
    expect(screen.getByText('Container for content')).toBeInTheDocument();
    expect(screen.getByText('Text input field')).toBeInTheDocument();
  });

  it('displays component categories as badges', () => {
    render(<ComponentLibrary {...defaultProps} />);
    
    const inputBadges = screen.getAllByText('Input');
    const layoutBadges = screen.getAllByText('Layout');
    
    expect(inputBadges.length).toBeGreaterThan(1); // Category filter + component badges
    expect(layoutBadges.length).toBeGreaterThan(1);
  });
});
